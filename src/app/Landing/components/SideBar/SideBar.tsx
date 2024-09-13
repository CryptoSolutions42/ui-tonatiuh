import { FC, useState } from 'react';
import { StyledSideBar, AnchorLink, AnchorWrapper } from './styled';

export const SideBar: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeActive = (index: number) => {
    setActiveIndex(index);
  };

  const getActiveFlag = (index: number, anchorIndex: number) => {
    return index === anchorIndex ? 'active' : '';
  };

  return (
    <StyledSideBar>
      {['#hello', '#cards', '#hinkalsdk', '#privacy', '#story'].map((anchor, index) => (
        <AnchorLink
          key={`anchor-${index}`}
          href={anchor}
          className={getActiveFlag(activeIndex, index)}
          onClick={() => changeActive(index)}
        >
          <AnchorWrapper className={getActiveFlag(activeIndex, index)} />
        </AnchorLink>
      ))}
    </StyledSideBar>
  );
};
