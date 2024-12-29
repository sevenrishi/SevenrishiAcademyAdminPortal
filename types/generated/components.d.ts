import type { Schema, Struct } from '@strapi/strapi';

export interface ConponentVideoTopic extends Struct.ComponentSchema {
  collectionName: 'components_conponent_video_topics';
  info: {
    displayName: 'VideoTopic';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    name: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'conponent.video-topic': ConponentVideoTopic;
    }
  }
}
