import Image from 'next/image';
import useSWR from 'swr';
import Hero from '/public/images/hero_man_on_rock.png';

import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const fetcher = (url) => fetch(url).then((r) => r.json());

// function ThumbnailPlugin(
//   mainRef: MutableRefObject<KeenSliderInstance | null>
// ): KeenSliderPlugin {
//   return (slider) => {
//     function removeActive() {
//       slider.slides.forEach((slide) => {
//         slide.classList.remove('active');
//       });
//     }
//     function addActive(idx: number) {
//       slider.slides[idx].classList.add('active');
//     }

//     function addClickEvents() {
//       slider.slides.forEach((slide, idx) => {
//         slide.addEventListener('click', () => {
//           if (mainRef.current) mainRef.current.moveToIdx(idx);
//         });
//       });
//     }

//     slider.on('created', () => {
//       if (!mainRef.current) return;
//       addActive(slider.track.details.rel);
//       addClickEvents();
//       mainRef.current.on('animationStarted', (main) => {
//         removeActive();
//         const next = main.animator.targetIdx || 0;
//         addActive(main.track.absToRel(next));
//         slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
//       });
//     });
//   };
// }

export function Index() {
  const { data, error } = useSWR('/api/chapters', fetcher);

  // const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
  //   initial: 0,
  // });
  // const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
  //   {
  //     initial: 0,
  //     slides: {
  //       perView: 5,
  //       spacing: 10,
  //     },
  //   },
  //   [ThumbnailPlugin(instanceRef)]
  // );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="w-full bg-black h-screen">
      <div className="max-w-5xl mx-auto px-5">
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="text-white font-bold text-2xl">道教 (Daoism)</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-white font-bold text-xl">Home</div>
            <div className="text-white font-bold text-xl">About</div>
            <div className="text-white font-bold text-xl">Contact</div>
          </div>
        </nav>

        {/* <div ref={sliderRef} className="keen-slider text-white">
          {data.map((chapter, index) => (
            <div
              className={`keen-slider__slide number-slide${index}"`}
              key={chapter.id}
            >
              <Image src={Hero} alt="Hero" />
            </div>
          ))}
        </div> */}

        {/* <div
          ref={thumbnailRef}
          className="keen-slider thumbnail pl-1 lg:px-4 -mt-10"
        >
          {data.map((chapter, index) => (
            <div
              className={`keen-slider__slide number-slide${index}`}
              key={chapter.id}
            >
              <Image src={chapter.image} alt="Hero" layout="fill" />
            </div>
          ))}
        </div> */}

        {/* <div className="relative w-auto h-auto md:w-full">
          <Image src={Hero} alt="daoism" className="rounded-lg" />
        </div>
        <div className="space-x-2 mx-4 flex relative flex-wrap -mt-12">
          {data.map((chapter, index) => {
            if (index < 5) {
              return (
                <div key={index} className="w-16 h-16 shadow-2xl">
                  <Image src={Hero} alt={chapter.title} />
                </div>
              );
            }
          })}
        </div> */}
      </div>
    </div>
  );
}

export default Index;
