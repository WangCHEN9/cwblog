import { TOTAL_SCREENS } from './commonUtils';
import { Subject } from 'rxjs';
import { object } from 'prop-types';

export default class ScrollService {
  static scrollHandler = new ScrollService();
  static currentScreenBoardCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    // window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
  }

  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById('ContactMe');
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: 'smooth' });
  };
  scrollToHome = () => {
    let homeScreen = document.getElementById('Home');
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: 'smooth' });
  };

  isElementInview = (elem: any, type: any) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.Bottom;
    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;
    let completelyVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case 'partial':
        return partiallyVisible;
      case 'complete':
        return completelyVisible;
      default:
        return false;
    }
  };

  // checkCurrentScreenUnderViewport = (event: any) => {
  //   if (!event || object.keys(event).length < 1) return;
  //   for (let screen of TOTAL_SCREENS) {
  //     let screenFromDOM = document.getElementById(screen.screen_name);
  //     if (!screenFromDOM) continue;

  //     let fullVisible = this.isElementInview(screenFromDOM, 'complete');
  //     let partiallyVisible = this.isElementInview(screenFromDOM, 'partial');

  //     if (fullVisible || partiallyVisible) {
  //       if (partiallyVisible && !screen.alreadyRendered) {
  //         ScrollService.currentScreenFadeIn.next({
  //           faceInScreen: screen.screen_name,
  //         });
  //         screen['alreadyRendered'] = true;
  //         break;
  //       }
  //       if (fullVisible) {
  //         ScrollService.currentScreenBoardCaster.next({
  //           screenInView: screen.screen_name,
  //         });
  //         break;
  //       }
  //     }
  //   }
  // };
}
