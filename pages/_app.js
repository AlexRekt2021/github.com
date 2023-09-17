import { storyblokInit, apiPlugin } from "@storyblok/react";
 
 storyblokInit({
   accessToken: "<your-access-token>",
     use: [apiPlugin]
     });