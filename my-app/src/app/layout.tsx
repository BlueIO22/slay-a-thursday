"use client";

import slimeyGarden from "./battles/slimeyGarden";
import fred from "./characters/fred";
import myFirstSlime from "./characters/myFirstSlime";
import { Battle } from "./lib/battle";
import State from "./lib/state";
import flaskOfPerfectionReward from "./rewards/flaskOfPerfectionReward";
import styles from "./layout.module.css";
import { useEffect, useState } from "react";
import Character from "./components/character";
export let state: State = {
  character: fred,
  battles: [slimeyGarden],
  getCurrentBattle: () => {
    return state.battles[state.currentPosition];
  },
  currentPosition: 0,
  currentCharacter: fred,
  showInformation: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ul className={styles.navbar}>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/battle">battle</a>
          </li>
          <li>
            <a href="/victory">victory</a>
          </li>
          <li>
            <a href="/defeat">defeat</a>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
