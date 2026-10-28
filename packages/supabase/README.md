# Letsheng-Holdings Supabase package

## Generating database types

Database types live in `packages/supabase/src/supabaseType.ts` and are generated from the **hosted** project via `pnpm gen:types` at the repository root, which runs `scripts/gen-types.mjs`.

Set `SUPABASE_PROJECT_ID` to the hosted project's 20-character reference (from the project admin or the project dashboard URL — it is deliberately not hard-coded here) and authenticate the Supabase CLI once:

```powershell
$env:SUPABASE_PROJECT_ID = "<your-project-ref>"
pnpm gen:types
```

The script validates the reference format before running, and replaces the generated file only after the CLI succeeds with non-empty output — a failed or timed-out run never truncates the existing types — then formats the result with Biome so `pnpm lint` stays green. Never hand-write generated types.
