import { useEffect, useState } from "react";
import DSTheme from "../../styles/theme";
import Spinner from "../Spinner";
import { iWelcomeTransitionComponent } from "./interface";
import { FullScreenContainer, SpinnerWrapper, UpwardTransitionItem, UPWARD_ANIMATION_DURATION_MS } from "./styles";

const WELCOME_TRANSITIONS = [
  {
    delay: '0.2s',
    backgroundColor: DSTheme.colors.DARKEST
  },
  {
    delay: '0.5s',
    backgroundColor: DSTheme.colors.LIGHT
  }
]

const WELCOME_TRANSITION_FULL_TIME_MS = UPWARD_ANIMATION_DURATION_MS * WELCOME_TRANSITIONS.length + 60

const WelcomeTransitionComponent: React.FC<iWelcomeTransitionComponent> = ({ loading }) => {
  const [finishedTransition, setFinishedTransition] = useState(false);

  useEffect(() => {
    if (!loading) {
      // End transition and release mouse click
      setTimeout(() => setFinishedTransition(true), WELCOME_TRANSITION_FULL_TIME_MS)
    }
  }, [loading])

  if (finishedTransition) return null;

  return (
    <FullScreenContainer>
      {WELCOME_TRANSITIONS.map((transition, index) => 
        <UpwardTransitionItem
          key={`welcome-transition-item-${index}`}
          delay={transition.delay}
          backgroundColor={transition.backgroundColor}
          startAnimation={!loading}
          index={index}
        >
          {(index === 0 && loading) ? (
            <SpinnerWrapper>
              <Spinner size={72} />
            </SpinnerWrapper>
          ) : null}
        </UpwardTransitionItem>
      )}
    </FullScreenContainer>
  )
}

export default WelcomeTransitionComponent;