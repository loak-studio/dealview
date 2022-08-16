import { storyblokInit, apiPlugin } from "@storyblok/js";

const { storyblokApi } = storyblokInit({
  accessToken: import.meta.env.TOKEN,
  use: [apiPlugin],
});

const getStory = async (path = "") => {
  const data = await fetch(
    "https://api.storyblok.com/v1/cdn/stories" +
      `?&token=${
        import.meta.env.TOKEN
      }&starts_with=${path}&resolve_relations=writer&cv=${new Date()}`
  );
  return await data.json();
};

export { storyblokApi, getStory };
