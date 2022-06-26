import { Component, createEffect, createResource, createSignal, For } from 'solid-js';
import { createStore } from "solid-js/store";
// import { debounce } from "@solid-primitives/scheduled";
import { ResultItem } from './ResultItem';
import { fetchImages } from './image-fetcher';
import LadyBug from './icons/LadyBug';


const App: Component = () => {
  const [inputValue, setInputValue] = createSignal();
  const [query, setQuery] = createSignal();
  const [images, setImages] = createStore([]);
  const [result] = createResource(query, fetchImages);
  // const newQuery = debounce((query: string) => setQuery(query), 1000);
  // const [result] = createResource(query, fetchImages);

  const search = () => {
    setQuery(inputValue());
  }

  createEffect(() => {
    const items = result().data.result.items as ResultItem[];
    setImages(items);
  })

  return (
    <>
      <div class="container mx-auto p-6">
        <div class="flex flex-col items-center">
          <h1 class="block text-6xl mb-8 tracking-wide font-bold" style="text-shadow: #A3A3A3 1px 1px 1px">
            <span style="color:#ff4747;">C</span>
            <span style="color:#ffd147;">O</span>
            <span style="color:#a3ff47;">L</span>
            <span style="color:#47ff75;">O</span>
            <span style="color:#47ffff;">R</span>
            <span style="color:#4775ff;">A</span>
            <span style="color:#a347ff;">R</span>
            <span style="color:#ff47d1;">E</span>
          </h1>
          <div class="relative text-gray-600 focus-within:text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
            </span>
            <input type="search" class="py-2 text-xl w-96 h-12 text-gray-900 border rounded-md pl-10" placeholder="Cerca..." autocomplete="off"
              onInput={(e) => setInputValue(e.currentTarget.value)} />
          </div>
          <div class="flex flex-row mt-4">
            <button role="button" class="hover:bg-pink-100 hover:border-red-200 bg-gray-100 py-2 px-6 mr-4 border-1 rounded" onClick={search}>
                <svg class="inline-block w-4 h-4 -mt-1 mr-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              Cerca</button>
            <button role="button" class="bg-gray-100 py-2 px-6 border-1 rounded">

              <LadyBug classList="mr-10"/>

              Prova la fortuna
              
            </button>
          </div>
        </div>
      </div>

      <div class="container mx-auto p-6 grid grid-cols-4 gap-4">
        <For each={images}>{(res) =>
          <div class="col-span-1 flex flex-col bg-white border-2 p-4">
            <img class="object-cover" src={res.thumbnail} />
            {/* <div class="flex flex-wrap mt-auto pt-3 text-xs">
              <h2 class="mb-2 font-bold text-2xl">
                {res.title}
              </h2>
            </div> */}
          </div>
        }
        </For>
      </div>
    </>
  );
};

export default App;
