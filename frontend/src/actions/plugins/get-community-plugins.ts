'use server';

export default async function getCummunityPlugins() {
  const response = await fetch(
    'https://raw.githubusercontent.com/BasedHardware/Omi/main/community-plugins.json',
    {
      next: { revalidate: 24 * 60 * 60 },
    },
  );
  return await response.json();
}

export async function getCommunityPlugin(pluginId: string) {
  const plugins = await getCummunityPlugins();
  return plugins.find((plugin) => plugin.id === pluginId);
}