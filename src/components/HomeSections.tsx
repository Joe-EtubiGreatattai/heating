'use client';

import { Fragment, useEffect, useState, type ReactNode } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import EmergencyCTA from '@/components/EmergencyCTA';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Segments from '@/components/Segments';
import Gallery from '@/components/Gallery';
import BookingCalendar from '@/components/BookingCalendar';

const API = 'https://direct-heating.duckdns.org/api';

const DEFAULT_VISIBILITY: Record<string, unknown> = {
  homeHero: true,
  homeSegments: true,
  homeServices: true,
  homeEmergencyCta: true,
  homePricing: true,
  homeTestimonials: true,
  homeGallery: true,
  homeFaq: true,
  homeBooking: true,
  homeContact: true,
  homeOrder: ['homeHero', 'homeSegments', 'homeServices', 'homeEmergencyCta', 'homePricing', 'homeTestimonials', 'homeGallery', 'homeFaq', 'homeBooking', 'homeContact']
};

function computeOrder(raw: unknown, defaults: string[]) {
  const allowed = new Set(defaults);
  const next: string[] = [];
  const seen = new Set<string>();
  if (Array.isArray(raw)) {
    for (const v of raw) {
      if (typeof v !== 'string') continue;
      if (!allowed.has(v)) continue;
      if (seen.has(v)) continue;
      seen.add(v);
      next.push(v);
    }
  }
  for (const v of defaults) {
    if (!seen.has(v)) next.push(v);
  }
  return next;
}

export default function HomeSections() {
  const [visibility, setVisibility] = useState<Record<string, unknown>>(DEFAULT_VISIBILITY);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(`${API}/cms/sections`);
        const json = (await res.json()) as unknown;
        if (cancelled) return;
        if (json && typeof json === 'object') setVisibility(json as Record<string, unknown>);
      } catch {
        if (cancelled) return;
        setVisibility(DEFAULT_VISIBILITY);
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  const renderers: Record<string, ReactNode> = {
    homeHero: <Hero />,
    homeSegments: <Segments />,
    homeServices: <Services />,
    homeEmergencyCta: <EmergencyCTA />,
    homePricing: <Pricing />,
    homeTestimonials: <Testimonials />,
    homeGallery: <Gallery />,
    homeFaq: <FAQ />,
    homeBooking: <BookingCalendar />,
    homeContact: <ContactForm />
  };

  const defaultOrder = DEFAULT_VISIBILITY.homeOrder as string[];
  const order = computeOrder(visibility.homeOrder, defaultOrder);

  return (
    <>
      {order.map((key) => {
        const enabled = visibility[key];
        if (enabled === false) return null;
        const node = renderers[key];
        if (!node) return null;
        return <Fragment key={key}>{node}</Fragment>;
      })}
    </>
  );
}
