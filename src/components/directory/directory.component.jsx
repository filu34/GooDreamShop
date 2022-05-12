import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'fantasy',
	imageUrl: 'https://img3.goodfon.com/wallpaper/nbig/2/22/lost-in-a-dream-devochka.jpg',
    route: 'shop/fantasy',
  },
  {
    id: 2,
    title: 'comedy',
	  imageUrl: 'https://www.dreamiiz.com/wp-content/uploads/2019/03/Sans-titre-1.jpg',
    route: 'shop/comedy',
  },
  {
    id: 3,
    title: 'action',
	  imageUrl: 'https://img.izismile.com/img/img4/20110401/640/amazing_action_photos_640_27.jpg',
    route: 'shop/action',
  },
  {
    id: 4,
    title: 'adventure',
	  imageUrl: 'https://getwallpapers.com/wallpaper/full/b/9/3/1222498-top-adventure-wallpapers-2739x1829-for-full-hd.jpg',
    route: 'shop/adventure',
  },
  {
    id: 5,
    title: 'romance',
	  imageUrl: 'http://www.hdwallpaperslife.com/wp-content/uploads/2019/02/couple_romantic_dream.jpg',
    route: 'shop/romance',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
