import React from 'react';
import ReactDom from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import ContentPage from './pages/ContentPage.jsx';

import RootLayout from './layouts/RootLayout.jsx';

const data = [
  {
    id: 'mars',
    title: 'Mars',
    content:
      'Known as the Red Planet, Mars has fascinated humans for centuries. It is home to the highest mountain in the solar system, Olympus Mons, and evidence suggests water once flowed on its surface.',
  },
  {
    id: 'venus',
    title: 'Venus',
    content:
      'Venus, our closest planetary neighbor, is shrouded in thick clouds of sulfuric acid, making it a hostile environment. Its surface temperatues are hot enough to melt lead.',
  },
  {
    id: 'nebula',
    title: 'Orion Nebula',
    content:
      'Located in the constellation of Orion, the Orino Nebula is a vibrant nursery where new stars are born. It is one of the brightest visible to the naked eye in the night sky.',
  },
  {
    id: 'andromeda',
    title: 'Andromeda Galaxy',
    content:
      'The Andromeda Galax is the closest galaxy to our Milky Way and is on a collision course with it. In about 4 billion years, the two will merge into a single, larger galaxy.',
  },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route to="/" element={<RootLayout data={data} />}>
      <Route index element={<HomePage />} />
      {data.map((dataElement) => (
        <Route
          key={dataElement.id}
          path={`/content/${dataElement.id}`}
          element={<ContentPage data={dataElement} />}
        />
      ))}
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
