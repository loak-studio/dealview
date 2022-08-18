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
      }&starts_with=${path}&resolve_relations=author&cv=${new Date()}`
  );
  return await data.json();
};

const getOffersSortedByPrice = async () => {
  const { stories } = await getStory("offers");
  return stories.sort((a, b) => a.content.price - b.content.price);
};

const getContactLink = async () => {
  const { stories } = await getStory("links");
  return stories[0].content.contact;
};

const getSocialLinks = async () => {
  const { stories } = await getStory("links");
  return stories[0].content.socialLinks;
};

const getTeam = async () => {
  const { stories } = await getStory("team");
  return stories;
};

const getComments = async () => {
  const { stories } = await getStory("comments");
  return stories;
};

const getArticles = async () => {
  const { stories } = await getStory("posts");
  return stories;
};

export {
  storyblokApi,
  getStory,
  getOffersSortedByPrice,
  getContactLink,
  getTeam,
  getComments,
  getArticles,
  getSocialLinks,
};
