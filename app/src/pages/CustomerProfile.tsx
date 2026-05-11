import { useEffect, useState } from 'react';

import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  Save,
  Sparkles,
  MessageCircle,
  Wrench,
  ChevronRight,
  Clock3,
  ImagePlus,
} from 'lucide-react';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { supabase } from '@/lib/supabase';

export default function CustomerProfilePage() {

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [profile, setProfile] =
    useState<any>(null);

  const [profileImage, setProfileImage] =
    useState<string | null>(null);

  const [bookings, setBookings] =
    useState<any[]>([]);

  // FETCH USER + PROFILE + BOOKINGS
  useEffect(() => {

    const loadData = async () => {

      // AUTH USER
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      // PROFILE
      const {
        data: profileData,
      } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      // BOOKINGS
      const {
        data: bookingsData,
      } = await supabase
        .from('bookings')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', {
          ascending: false,
        });

      if (profileData) {

        setProfile(profileData);

        if (profileData.avatar_url) {
          setProfileImage(
            profileData.avatar_url
          );
        }
      }

      if (bookingsData) {
        setBookings(bookingsData);
      }

      setLoading(false);
    };

    loadData();

  }, []);

  // UPDATE PROFILE
  const handleUpdate =
    async () => {

      if (!profile) return;

      setSaving(true);

      const { error } =
        await supabase
          .from('profiles')
          .update({
            full_name:
              profile.full_name,

            phone:
              profile.phone,

            address:
              profile.address,
          })
          .eq('id', profile.id);

      setSaving(false);

      if (!error) {

        alert(
          'Profile updated successfully.'
        );

      } else {

        alert(error.message);
      }
    };

  // PROFILE IMAGE
  const handleImageUpload =
    async (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {

      const file =
        e.target.files?.[0];

      if (!file || !profile) return;

      const filePath =
        `avatars/${profile.id}-${Date.now()}`;

      // UPLOAD
      const {
        error: uploadError,
      } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) {

        alert(uploadError.message);
        return;
      }

      // PUBLIC URL
      const {
        data: { publicUrl },
      } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      // SAVE TO PROFILE
      await supabase
        .from('profiles')
        .update({
          avatar_url: publicUrl,
        })
        .eq('id', profile.id);

      setProfileImage(publicUrl);

      setProfile({
        ...profile,
        avatar_url: publicUrl,
      });

      alert(
        'Profile photo updated.'
      );
    };

  if (loading) {

    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-black">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-black">

      {/* NAVIGATION */}
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-[#f6f3ff] via-white to-white px-6 pb-20 pt-40">

        {/* GLOW */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[700px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-6">

              {/* PROFILE PHOTO */}
              <div className="relative">

                <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-[#5B3DF5]/10 bg-white shadow-[0_20px_50px_rgba(91,61,245,0.10)]">

                  {profileImage ? (

                    <img
                      src={profileImage}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />

                  ) : (

                    <User className="h-14 w-14 text-gray-300" />

                  )}

                </div>

                {/* CAMERA */}
                <label className="absolute bottom-1 right-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#5B3DF5] text-white shadow-lg hover:scale-105 transition-all">

                  <Camera className="h-5 w-5" />

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={
                      handleImageUpload
                    }
                  />

                </label>

              </div>

              {/* TEXT */}
              <div>

                <div className="inline-flex items-center rounded-full border border-[#5B3DF5]/20 bg-[#5B3DF5]/5 px-3 py-1 text-sm font-medium text-[#5B3DF5]">

                  Reedo Customer

                </div>

                <h1 className="mt-4 text-5xl font-semibold tracking-tight">

                  Welcome,
                  {' '}
                  {profile?.full_name || 'Customer'}

                </h1>

                <p className="mt-3 max-w-xl text-lg leading-8 text-gray-600">

                  Manage your profile,
                  bookings, and smart assistance.

                </p>

              </div>

            </div>

            {/* ACTIONS */}
            <div className="flex flex-col gap-4 sm:flex-row">

              <Button
                onClick={handleUpdate}
                disabled={saving}
                className="h-12 rounded-2xl bg-[#5B3DF5] px-6 hover:bg-[#4c32d9]"
              >

                <Save className="mr-2 h-5 w-5" />

                {saving
                  ? 'Saving...'
                  : 'Update Profile'}

              </Button>

              <Button
                className="h-12 rounded-2xl border border-[#5B3DF5]/20 bg-white px-6 text-[#5B3DF5] hover:bg-[#faf7ff]"
              >

                <Sparkles className="mr-2 h-5 w-5" />

                Chat With Reedo AI

              </Button>

            </div>

          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_340px]">

          {/* LEFT */}
          <div className="space-y-10">

            {/* PROFILE CARD */}
            <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-[0_15px_50px_rgba(0,0,0,0.04)]">

              <div>

                <h2 className="text-3xl font-semibold">
                  Personal Information
                </h2>

                <p className="mt-2 text-gray-500">
                  Information connected to your Reedo account.
                </p>

              </div>

              {/* FORM */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2">

                {/* NAME */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>

                  <div className="relative">

                    <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <Input
                      value={
                        profile?.full_name || ''
                      }
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          full_name:
                            e.target.value,
                        })
                      }
                      className="h-12 rounded-2xl pl-12"
                    />

                  </div>

                </div>

                {/* EMAIL */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <div className="relative">

                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <Input
                      value={
                        profile?.email || ''
                      }
                      disabled
                      className="h-12 rounded-2xl pl-12"
                    />

                  </div>

                </div>

                {/* PHONE */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>

                  <div className="relative">

                    <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <Input
                      value={
                        profile?.phone || ''
                      }
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          phone:
                            e.target.value,
                        })
                      }
                      className="h-12 rounded-2xl pl-12"
                    />

                  </div>

                </div>

                {/* ADDRESS */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Address
                  </label>

                  <div className="relative">

                    <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <Input
                      value={
                        profile?.address || ''
                      }
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          address:
                            e.target.value,
                        })
                      }
                      className="h-12 rounded-2xl pl-12"
                    />

                  </div>

                </div>

              </div>

            </div>

            {/* BOOKINGS */}
            <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-[0_15px_50px_rgba(0,0,0,0.04)]">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-3xl font-semibold">
                    Your Bookings
                  </h2>

                  <p className="mt-2 text-gray-500">
                    Your Reedo service requests and history.
                  </p>

                </div>

                <a
                  href="/services"
                  className="rounded-2xl bg-[#5B3DF5] px-5 py-3 text-sm text-white shadow-[0_10px_30px_rgba(91,61,245,0.3)] transition-all hover:-translate-y-[1px] hover:bg-[#4c32d9]"
                >
                  Explore Services
                </a>

              </div>

              {/* BOOKINGS LIST */}
              {bookings.length > 0 ? (

                <div className="mt-10 space-y-4">

                  {bookings.map((booking) => (

                    <div
                      key={booking.id}
                      className="rounded-2xl border border-gray-100 bg-[#fafafa] p-5"
                    >

                      <div className="flex items-start justify-between gap-4">

                        <div>

                          <h3 className="text-lg font-semibold">
                            {booking.service_name}
                          </h3>

                          <p className="mt-2 text-gray-500">
                            {booking.description}
                          </p>

                        </div>

                        <div className="rounded-full bg-[#5B3DF5]/10 px-4 py-2 text-sm font-medium text-[#5B3DF5]">

                          {booking.status || 'Pending'}

                        </div>

                      </div>

                    </div>
                  ))}

                </div>

              ) : (

                <div className="mt-12 flex flex-col items-center justify-center rounded-[28px] border border-dashed border-gray-200 bg-[#fafafa] px-8 py-16 text-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5B3DF5]/10 text-[#5B3DF5]">

                    <Clock3 className="h-8 w-8" />

                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    No Bookings Yet
                  </h3>

                  <p className="mt-4 max-w-md leading-8 text-gray-600">

                    Once you request a service,
                    your bookings will appear here.

                  </p>

                </div>
              )}

            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-8">

            {/* AI CARD */}
            <div className="rounded-[32px] border border-[#5B3DF5]/10 bg-gradient-to-b from-[#faf7ff] to-white p-8 shadow-[0_20px_60px_rgba(91,61,245,0.08)]">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5B3DF5]/10 text-[#5B3DF5]">

                  <MessageCircle className="h-6 w-6" />

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Reedo AI
                  </p>

                  <h3 className="text-xl font-semibold">
                    Smart Assistance
                  </h3>

                </div>

              </div>

              <p className="mt-6 leading-8 text-gray-600">

                Soon you’ll be able to:
              </p>

              <div className="mt-6 space-y-4">

                <div className="flex items-start gap-3">

                  <Sparkles className="mt-1 h-5 w-5 text-[#5B3DF5]" />

                  <p className="leading-7 text-gray-600">
                    Explain problems directly to Reedo AI
                  </p>

                </div>

                <div className="flex items-start gap-3">

                  <ImagePlus className="mt-1 h-5 w-5 text-[#5B3DF5]" />

                  <p className="leading-7 text-gray-600">
                    Upload photos of damaged furniture or issues
                  </p>

                </div>

                <div className="flex items-start gap-3">

                  <Wrench className="mt-1 h-5 w-5 text-[#5B3DF5]" />

                  <p className="leading-7 text-gray-600">
                    Receive AI-powered service recommendations
                  </p>

                </div>

              </div>

              <Button className="mt-8 w-full rounded-2xl bg-[#5B3DF5] hover:bg-[#4c32d9]">

                Start AI Assistance

              </Button>

            </div>

            {/* QUICK SERVICES */}
            <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-[0_15px_50px_rgba(0,0,0,0.04)]">

              <h3 className="text-2xl font-semibold">
                Popular Services
              </h3>

              <div className="mt-8 space-y-4">

                {[
                  'Cleaning',
                  'Plumbing',
                  'Electrical',
                  'Furniture Assembly',
                  'IT Support',
                ].map((service) => (

                  <a
                    key={service}
                    href="/services"
                    className="flex items-center justify-between rounded-2xl border border-gray-100 px-5 py-4 transition-all hover:border-[#5B3DF5] hover:bg-[#faf7ff]"
                  >

                    <span className="font-medium">
                      {service}
                    </span>

                    <ChevronRight className="h-5 w-5 text-gray-400" />

                  </a>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}