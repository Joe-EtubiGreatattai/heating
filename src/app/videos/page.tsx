import { redirect } from 'next/navigation';

export const metadata = {
    title: "How-To Videos & Project Timelapses | Direct Heating Ltd",
    description: "Watch our team in action. Pro boiler installations and helpful maintenance tips.",
};

export default function VideosPage() {
    redirect('/');
}
