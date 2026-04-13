# Welcome to your Lovable project
 the next top startup from Harar
## Project info

**URL**: https://lovable.dev/projects/99f92d8f-37a6-4335-a056-b4aa5750c3d2

## How can I edit this code?
# svally
There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/99f92d8f-37a6-4335-a056-b4aa5750c3d2) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Supabase setup

This app already expects a Supabase project and uses it for authentication plus app tables like `users`, `saved_questions`, and `search_history`.

1. Copy [.env.example](C:/Users/USER/ALEX/success1/.env.example) to `.env`.
2. Fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY`.
3. Keep `VITE_SUPABASE_SERVICE_ROLE_KEY` only for server-side or edge function work. Do not expose it to the browser client.
4. Apply every SQL file in [supabase/migrations](C:/Users/USER/ALEX/success1/supabase/migrations) to your fresh Supabase project.
5. In the Supabase dashboard, enable Email auth and configure your site URL / redirect URL for password reset and confirmation links.
6. The app now includes an auth-to-profile sync trigger, so new auth signups create or refresh a row in `public.users` automatically.

The current local `.env` already points at project `fwbiikxkfzuvjfqitppo`, so the main missing piece was the reproducible database setup.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/99f92d8f-37a6-4335-a056-b4aa5750c3d2) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
