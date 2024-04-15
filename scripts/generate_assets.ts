import { characters, weapons } from "genshin-db";

for (const [key, value] of Object.entries({
  characters: characters("names", { matchCategories: true, verboseCategories: true }).map(
    (character) => ({
      name: character.name,
      icon: character.images.mihoyo_icon,
      filename: normalize(character.name),
    }),
  ),
  weapons: weapons("names", { matchCategories: true, verboseCategories: true }).map((weapon) => ({
    name: weapon.name,
    icon: weapon.images.mihoyo_icon,
    filename: normalize(weapon.name),
  })),
})) {
  await Bun.write(
    `${import.meta.dir}/../static/${key}.json`,
    JSON.stringify(
      value.map((item) => ({
        ...item,
        icon: `/${key}/${item.filename}.png`,
      })),
      null,
      2,
    ),
  );

  for (const item of value) {
    if (!item.icon) continue;

    const response = await fetch(item.icon);

    await Bun.write(
      `${import.meta.dir}/../static/${key}/${item.filename}.png`,
      await response.blob(),
    );
  }
}

function normalize(string: string) {
  return string
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "_");
}
