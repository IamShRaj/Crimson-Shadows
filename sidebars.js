// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Story sidebar with chapters organized by parts
  storySidebar: [
    'prologue',
    {
      type: 'category',
      label: 'Part I: The Awakening',
      items: [
        'part1/chapter1',
        'part1/chapter2',
        'part1/chapter3',
        'part1/chapter4',
        'part1/chapter5',
      ],
    },
    {
      type: 'category',
      label: 'Part II: Temptation',
      items: [
        'part2/chapter6',
        'part2/chapter7',
        'part2/chapter8',
        'part2/chapter9',
        'part2/chapter10',
      ],
    },
    {
      type: 'category',
      label: 'Part III: Shadows Unveiled',
      items: [
        'part3/chapter11',
        'part3/chapter12',
        'part3/chapter13',
        'part3/chapter14',
        'part3/chapter15',
      ],
    },
    {
      type: 'category',
      label: 'Coming Soon',
      items: [
        {
          type: 'html',
          value: '<div style="padding: 1rem; font-style: italic; color: #8b1538;">Future expansions:<br/>• Character spin-offs<br/>• Prequel stories<br/>• Sequel adventures</div>',
        },
      ],
    },
    'epilogue',
    {
      type: 'category',
      label: 'Story Resources',
      items: [
        'characters',
        'timeline',
        'story-outline',
      ],
    },
  ],
};

export default sidebars;
