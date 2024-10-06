import ImageSlider from './ImageSlider';

const AppSlider = () => {
  // Array di URL delle immagini
  const images = [
    '/icon/html5.svg',
    '/icon/css3.svg',
    '/icon/js.svg',
    '/icon/react.svg',
    '/icon/php.svg',
    '/icon/git.svg',
    '/icon/github.svg',
  ];

  return (
    <div>
      {/* Passa l'array di immagini al componente ImageSlider */}
      <ImageSlider images={images} />
    </div>
  );
};

export default AppSlider;
