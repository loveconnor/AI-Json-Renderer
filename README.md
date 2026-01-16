AI JSON Renderer

This project lets you build user interfaces from AI-generated JSON in a safe, predictable way. Instead of letting a model return raw HTML or React code, the model outputs JSON that must match your catalog of allowed components. Your app then renders that JSON into real UI.

The goal is simple: let users describe what they want, let AI propose UI structure, and keep everything constrained to components you control.

What this app does

- Converts natural-language prompts into JSON UI instructions
- Streams JSON line-by-line so the UI can update as the model responds
- Validates output against a fixed catalog to keep generation safe
- Renders the JSON into real React components

Key features

1) Guardrailed UI generation
You define a catalog of components and their props. The model is only allowed to use what you listed. This keeps output consistent and prevents unexpected markup.

2) Streaming responses
The API returns JSONL (JSON Lines). Your UI can render progressively instead of waiting for a full response.

3) React renderer and providers
The React package includes providers and hooks that make it easy to render generated UI, handle actions, apply validation, and bind data.

4) Data binding
Generated UI can reference live data through paths. This makes dashboards and widgets feel real without the model inventing values.

5) Validation and visibility rules
You can add custom validators and visibility rules to enforce business logic at render time.

6) Simple API endpoint
Both the main web app and the example dashboard include a Next.js API route that takes a prompt, calls a model, and streams JSONL back to the client.

What it supports

- Next.js apps using the App Router
- Streaming generation using the Vercel AI SDK
- Local models through Ollama (OpenAI-compatible endpoint)
- Hosted providers through the AI Gateway

Model providers

- AI Gateway (default)
	- Set AI_GATEWAY_API_KEY in your environment
	- Optional AI_MODEL override

- Ollama (local)
	- Set AI_PROVIDER=ollama
	- Set OLLAMA_MODEL, OLLAMA_BASE_URL, and OLLAMA_API_KEY
	- The server will use Ollama’s OpenAI-compatible /v1 endpoint

Packages and apps

- packages/core: schema types, prompt helpers, validation, visibility
- packages/react: React renderer, providers, hooks
- apps/web: main site and documentation
- examples/dashboard: sample dashboard app using the same JSON pipeline

Why this is useful

- You get AI-generated UI that stays on-brand and on-spec
- You avoid unsafe or unexpected HTML from the model
- You can stream results for fast, responsive UX
- You can reuse the same catalog and renderer across multiple apps

Who it is for

- Product teams building safe AI UI experiences
- Developers who want AI assistance without losing control
- Anyone who wants consistent, validated UI generation
