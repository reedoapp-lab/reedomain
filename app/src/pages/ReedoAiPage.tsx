import { useState } from 'react';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import {
  BrainCircuit,
  MapPinned,
  Clock3,
  ShieldCheck,
  Sparkles,
  Zap,
  Languages,
  Send,
  ImagePlus,
  User,
  Stars,
  WandSparkles,
  Bot,
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';

export default function ReedoAiPage() {

  const navigate = useNavigate();

  const [message, setMessage] =
    useState('');

  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] =
    useState<any[]>([]);

  const [preview, setPreview] =
    useState<string | null>(null);

  const features = [
    {
      icon: BrainCircuit,
      title: 'AI-Powered Understanding',
      desc:
        'Reedo AI deeply understands real-world service problems instead of simple keyword matching.',
    },
    {
      icon: MapPinned,
      title: 'Smart Local Matching',
      desc:
        'Nearby professionals are matched intelligently based on urgency, distance, ratings, and availability.',
    },
    {
      icon: Languages,
      title: 'Multilingual Assistance',
      desc:
        'Built for Poland with support for English, Polish, Ukrainian, and Russian speaking customers.',
    },
    {
      icon: Clock3,
      title: 'Real-Time Availability',
      desc:
        'Instantly discover professionals available right now without endless searching.',
    },
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Smarter Trust',
      desc:
        'AI-assisted filtering improves safety, reliability, and customer confidence.',
    },
    {
      icon: Zap,
      title: 'Faster Emergency Routing',
      desc:
        'Urgent requests can be intelligently prioritized and routed immediately.',
    },
    {
      icon: Sparkles,
      title: 'Personalized Experience',
      desc:
        'The platform continuously improves recommendations using usage patterns and bookings.',
    },
  ];

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file =
      e.target.files?.[0];

    if (!file) return;

    setPreview(
      URL.createObjectURL(file)
    );
  };

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {
      role: 'user',
      content: message,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setMessage('');

    setLoading(true);

    setTimeout(() => {

      const aiMessage = {
        role: 'assistant',
        content:
          'Reedo AI analyzed your request and identified the most suitable professional category. Future updates will include live AI diagnostics, urgency detection, multilingual understanding, and instant provider recommendations.',
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

      setLoading(false);

    }, 1600);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#fffaf3] text-black">

      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/5 pt-32">

        {/* GRADIENTS */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-orange-300/40 blur-[140px]" />

          <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-yellow-300/35 blur-[160px]" />

          <div className="absolute bottom-[-10%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-200/40 blur-[180px]" />

        </div>

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.04]">

          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
              backgroundSize:
                '60px 60px',
            }}
          />

        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-28">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-5 py-2 text-sm font-medium text-[#5B3DF5] backdrop-blur-xl">

                <Stars className="h-4 w-4" />

                Future Intelligence For Local Services

              </div>

              <h1 className="mt-8 text-6xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">

                Reedo AI

                <span className="mt-2 block bg-gradient-to-r from-[#5B3DF5] via-[#8f76ff] to-orange-400 bg-clip-text text-transparent">

                  The Smartest Way
                  To Solve Real Problems

                </span>

              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-700">

                Reedo AI combines intelligent matchmaking,
                multilingual understanding, image analysis,
                urgency detection, and behavioral learning
                to transform how people across Poland
                discover trusted professionals.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Button
                  onClick={() =>
                    navigate('/signup')
                  }
                  className="h-14 rounded-2xl border border-black/5 bg-[#5B3DF5] px-8 text-base font-semibold text-white shadow-[0_20px_60px_rgba(91,61,245,0.35)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#6c52ff]"
                >

                  Experience Reedo AI

                </Button>

                <Button
                  variant="outline"
                  onClick={() =>
                    navigate('/why-reedo')
                  }
                  className="h-14 rounded-2xl border border-black/5 bg-white/70 px-8 text-base font-semibold text-black backdrop-blur-xl hover:bg-white"
                >

                  Learn More

                </Button>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">

              {/* GLOW */}
              <div className="absolute inset-0 rounded-full bg-orange-200/40 blur-[120px]" />

              {/* FLOATING CARD */}
              <div className="absolute -left-10 top-10 rounded-3xl border border-black/5 bg-white/80 px-5 py-4 backdrop-blur-2xl shadow-[0_20px_60px_rgba(255,170,60,0.15)]">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1df]">

                    <BrainCircuit className="h-6 w-6 text-[#5B3DF5]" />

                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      AI Understanding
                    </p>

                    <h3 className="font-semibold">
                      Real Problem Analysis
                    </h3>

                  </div>

                </div>

              </div>

              {/* FLOATING CARD */}
              <div className="absolute bottom-10 right-0 rounded-3xl border border-black/5 bg-white/80 px-5 py-4 backdrop-blur-2xl shadow-[0_20px_60px_rgba(255,170,60,0.15)]">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">

                    <Zap className="h-6 w-6 text-orange-500" />

                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      Smart Matching
                    </p>

                    <h3 className="font-semibold">
                      Instant Recommendations
                    </h3>

                  </div>

                </div>

              </div>

              <img
                src="/images/ai.png"
                alt="Reedo AI"
                className="relative z-10 w-full max-w-xl object-contain drop-shadow-[0_20px_80px_rgba(255,170,60,0.25)]"
              />

            </div>

          </div>

        </div>

      </section>

      {/* AI CHAT */}
      <section className="relative px-6 py-28">

        <div className="mx-auto max-w-6xl">

          {/* TOP */}
          <div className="text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#5B3DF5]/10 bg-white/80 px-5 py-2 text-sm font-medium text-[#5B3DF5]">

              <WandSparkles className="h-4 w-4" />

              Live AI Experience

            </div>

            <h2 className="mt-6 text-5xl font-semibold tracking-tight">

              Talk To Reedo AI

            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">

              Describe your issue naturally,
              upload photos, and let Reedo AI
              intelligently guide you toward
              the best solution.

            </p>

          </div>

          {/* CHAT */}
          <div className="relative mt-16 overflow-hidden rounded-[40px] border border-black/5 bg-white/80 shadow-[0_30px_120px_rgba(255,170,60,0.15)] backdrop-blur-2xl">

            <div className="absolute inset-0 bg-gradient-to-b from-orange-100/20 to-transparent" />

            {/* MESSAGES */}
            <div className="relative h-[650px] overflow-y-auto p-8">

              <div className="space-y-6">

                {messages.length === 0 && (

                  <div className="flex h-full flex-col items-center justify-center text-center">

                    <div className="relative">

                      <div className="absolute inset-0 rounded-full bg-orange-200/40 blur-3xl" />

                      <div className="relative flex h-28 w-28 items-center justify-center rounded-[32px] border border-black/5 bg-white shadow-[0_20px_60px_rgba(255,170,60,0.15)]">

                        <Bot className="h-14 w-14 text-[#5B3DF5]" />

                      </div>

                    </div>

                    <h3 className="mt-8 text-3xl font-semibold">

                      Start Your AI Conversation

                    </h3>

                    <p className="mt-5 max-w-lg text-lg leading-8 text-gray-600">

                      Explain your problem naturally,
                      upload issue photos,
                      and let Reedo AI understand
                      what you actually need.

                    </p>

                  </div>

                )}

                {messages.map(
                  (msg, index) => (

                    <div
                      key={index}
                      className={`flex ${
                        msg.role === 'user'
                          ? 'justify-end'
                          : 'justify-start'
                      }`}
                    >

                      <div
                        className={`max-w-[80%] rounded-[28px] border px-6 py-5 backdrop-blur-xl ${
                          msg.role === 'user'
                            ? 'border-[#5B3DF5]/10 bg-[#5B3DF5] text-white shadow-[0_10px_40px_rgba(91,61,245,0.3)]'
                            : 'border-black/5 bg-white text-black'
                        }`}
                      >

                        <div className="flex items-center gap-2">

                          {msg.role === 'assistant' ? (

                            <Sparkles className="h-4 w-4 text-[#5B3DF5]" />

                          ) : (

                            <User className="h-4 w-4" />

                          )}

                          <span className="text-sm font-medium">

                            {msg.role === 'assistant'
                              ? 'Reedo AI'
                              : 'You'}

                          </span>

                        </div>

                        <p className="mt-4 leading-8 text-[15px]">

                          {msg.content}

                        </p>

                      </div>

                    </div>
                  )
                )}

                {loading && (

                  <div className="flex justify-start">

                    <div className="rounded-[28px] border border-black/5 bg-white px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="h-2 w-2 animate-pulse rounded-full bg-[#5B3DF5]" />

                        <div className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />

                        <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />

                        <span className="ml-2 text-sm text-gray-600">

                          Reedo AI is thinking...

                        </span>

                      </div>

                    </div>

                  </div>

                )}

              </div>

            </div>

            {/* INPUT */}
            <div className="relative border-t border-black/5 bg-white/70 p-6 backdrop-blur-2xl">

              {/* IMAGE */}
              <div className="mb-5">

                <label className="flex cursor-pointer items-center justify-center gap-3 rounded-3xl border border-dashed border-[#5B3DF5]/20 bg-[#fff1df] px-6 py-5 transition-all hover:border-[#5B3DF5] hover:bg-orange-50">

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />

                  <ImagePlus className="h-5 w-5 text-[#5B3DF5]" />

                  <span className="font-medium text-[#5B3DF5]">

                    Upload Furniture Damage
                    Or Service Issue

                  </span>

                </label>

                {preview && (

                  <img
                    src={preview}
                    alt="Preview"
                    className="mt-5 max-h-[240px] rounded-3xl border border-black/5 object-cover"
                  />

                )}

              </div>

              {/* INPUT */}
              <div className="flex gap-4">

                <Input
                  value={message}
                  onChange={(e) =>
                    setMessage(
                      e.target.value
                    )
                  }
                  placeholder="Describe your issue naturally..."
                  className="h-16 rounded-3xl border-black/5 bg-white px-6 text-black placeholder:text-gray-400 focus-visible:ring-[#5B3DF5]"
                  onKeyDown={(e) =>
                    e.key === 'Enter' &&
                    sendMessage()
                  }
                />

                <Button
                  onClick={sendMessage}
                  disabled={loading}
                  className="h-16 rounded-3xl bg-[#5B3DF5] px-7 shadow-[0_15px_50px_rgba(91,61,245,0.35)] transition-all hover:scale-[1.02] hover:bg-[#6e55ff]"
                >

                  <Send className="h-5 w-5" />

                </Button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="border-t border-black/5 bg-[#fff8ef] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-2">

            {features.map((feature, index) => (

              <div
                key={index}
                className="group relative overflow-hidden rounded-[36px] border border-black/5 bg-white/80 p-10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-[3px] hover:border-[#5B3DF5]/20 hover:shadow-[0_20px_60px_rgba(255,170,60,0.12)]"
              >

                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-100/60 blur-[80px]" />

                <div className="relative">

                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#fff1df]">

                    <feature.icon className="h-8 w-8 text-[#5B3DF5]" />

                  </div>

                  <h3 className="mt-8 text-3xl font-semibold">

                    {feature.title}

                  </h3>

                  <p className="mt-5 text-lg leading-8 text-gray-600">

                    {feature.desc}

                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">

            <h2 className="text-5xl font-semibold">

              Why Reedo AI Is Different

            </h2>

          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            {benefits.map((benefit, index) => (

              <div
                key={index}
                className="relative overflow-hidden rounded-[36px] border border-black/5 bg-white/80 p-10 backdrop-blur-xl shadow-[0_15px_50px_rgba(255,170,60,0.08)]"
              >

                <div className="absolute inset-0 bg-gradient-to-b from-orange-100/40 to-transparent" />

                <div className="relative">

                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#fff1df]">

                    <benefit.icon className="h-8 w-8 text-[#5B3DF5]" />

                  </div>

                  <h3 className="mt-8 text-3xl font-semibold">

                    {benefit.title}

                  </h3>

                  <p className="mt-5 text-lg leading-8 text-gray-600">

                    {benefit.desc}

                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}