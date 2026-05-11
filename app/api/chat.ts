import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { message } = body;

    if (!message) {

      return Response.json(
        { error: 'Message required' },
        { status: 400 }
      );
    }

    const completion =
      await openai.chat.completions.create({
        model: 'gpt-4.1-mini',

        messages: [
          {
            role: 'system',
            content:
              'You are Reedo AI, a smart home service assistant helping users diagnose home and repair problems.',
          },

          {
            role: 'user',
            content: message,
          },
        ],
      });

    return Response.json({
      response:
        completion.choices[0].message.content,
    });

  } catch (error) {

    console.error(error);

    return Response.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}