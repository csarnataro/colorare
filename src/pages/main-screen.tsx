import { Component, createEffect, createResource, createSignal, For } from 'solid-js';
import { createStore } from "solid-js/store";
// import { debounce } from "@solid-primitives/scheduled";
import { Image } from '../types/image';
import { fetchImages } from '../image-fetcher';
import LadyBug from '../icons/lady-bug';
import Logo from '../components/logo';
import Magnifier from '../icons/magnifier';
import { useImages } from '../context/ImagesContext';
import { Link } from 'solid-app-router';
import { cache } from '../db';

const App: Component = () => {
  const [inputValue, setInputValue] = createSignal();
  const [query, setQuery] = createSignal();
  const [images, setImages] = createSignal<Image[]>();

  // const [images, setImages] = createStore([]);
  const [result] = createResource(query, cache(fetchImages));

  const search = () => {
    setQuery(inputValue());
  }

  createEffect(() => {
    console.dir('******** BEGIN: main-screen:26 ********');
    console.dir(result(), { depth: null, colors: true });
    console.dir('********   END: main-screen:26 ********');
    const items = result() as Image[];
    setImages(items);
  })

  console.dir('******** BEGIN: main-screen:33 ********');
  console.dir('in App', { depth: null, colors: true });
  console.dir('********   END: main-screen:33 ********');
  return (
    <>
      <div class="container mx-auto p-6">
        <div class="flex flex-col items-center">
          <Logo />
          <div class="relative text-gray-600 focus-within:text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                <Magnifier size={6} />
              </button>
            </span>
            <input type="search" class="py-2 pr-2 text-xl w-96 h-12 text-gray-900 border rounded-md pl-10" placeholder="Cerca..." autocomplete="off"
              onInput={(e) => setInputValue(e.currentTarget.value)} />
          </div>
          <div class="flex flex-row mt-4">
            <button role="button" class="hover:bg-pink-100 hover:border-red-200 bg-gray-100 py-2 px-6 mr-4 border-1 rounded" onClick={search}>
              <Magnifier additionalCssClass="-mt-1 mr-2" />
              Cerca</button>
            <button role="button" class="hover:bg-pink-100 hover:border-red-200 bg-gray-100 py-2 px-6 border-1 rounded">
              <LadyBug additionalCssClass="mr-2" />
              Mi sento fortunato
            </button>
          </div>
        </div>
      </div>

      <div class="container mx-auto p-6 grid grid-cols-4 gap-4">
        <For each={images()}>{(res) =>
          <Link href={`/image/${res._id}`}>
            <div class="col-span-1 flex flex-col bg-white border-2 p-4">
              <img class="object-cover" src={res.thumbnail} />
            </div>
          </Link>
        }
        </For>
      </div>
    </>
  );
};

export default App;
