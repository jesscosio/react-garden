import styled from "styled-components";
import React, { useState } from "react";
import { useInterval } from "react-use";

export const EmojiRain = (props) => {
  const [emojisToRender, setEmojisToRender] = useState([
    { key: 0, emoji: "🌼", offset: 0 },
  ]);

  const renderEmoji = (key, offset, emoji) => {
    return emojisToRender.map(({ key, offset, emoji }) => {
      return (
        <EmojiContainer key={key} offset={offset}>
          {emoji}
        </EmojiContainer>
      );
    });
  };
  const getEmoji = () => {
    const EMOJIS = ["🌺", "🌼", "🌸", "🍃"];
    return EMOJIS[Math.floor(Math.random() * 4)];
  };

  const calculateOffset = () => {
    return Math.floor(Math.random() * window.innerWidth);
  };

  useInterval(() => {
    const offset = calculateOffset();
    const key = offset + Math.floor(Math.random() * 99999);
    const emoji = getEmoji();

    if (emojisToRender.length > 30) {
      emojisToRender.shift();
    }
    emojisToRender.push({ offset, key, emoji });
    setEmojisToRender([...emojisToRender]);
  }, 500);

  return (
      <AbsoluteContainer>
          {renderEmoji()}
          </AbsoluteContainer>
  );
};

export const AbsoluteContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;
  height: 90vh;
  pointer-events: none;
`;

export const EmojiContainer = styled.div`
  @keyframes falling {
    0% {
      margin-top: -500px;
    }
    100% {
      margin-top: 1000px;
    }
  }
  
  margin-left: ${(props) => props.offset}px;
  font-size: 24px;
  z-index: 9;
  animation: falling 3s linear infinite;
`;
