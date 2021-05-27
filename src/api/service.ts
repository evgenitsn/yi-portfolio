import { createClient } from 'contentful';
import { PhotoProps } from 'react-photo-gallery';
import { IImageSectionFields } from '../../@types/generated/contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getAllEntriesByContentType(contentType: string) {
  const apiResponse = await client.getEntries({ content_type: contentType });
  return apiResponse.items.map(e => e.fields);
}

export const getVideos = async () => {
  const videosResponse = await getAllEntriesByContentType('video');
  return videosResponse;
};

export const getPhotosSections = async () => {
  const photoSectionsResponse = await getAllEntriesByContentType(
    'imageSection'
  );
  return photoSectionsResponse.map((photoSection: IImageSectionFields) => ({
    ...photoSection,
    photos: photoSection.photos
      // filters the draft photos from section
      .filter(e => 'fields' in e)
      .map(photo => {
        const {
          url,
          details: { image },
          fileName,
        } = photo.fields.file;
        return {
          width: image.width,
          height: image.height,
          alt: fileName,
          key: url,
          src: url,
        } as PhotoProps;
      }),
  }));
};
