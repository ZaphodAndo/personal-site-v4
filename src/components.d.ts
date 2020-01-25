/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppBlog {
    'posts': any;
  }
  interface AppHome {
    'posts': any;
  }
  interface AppRoot {
    'posts': any;
  }
  interface FirstPost {}
  interface GitSetup {}
  interface NavBar {}
  interface RevampPost {}
}

declare global {


  interface HTMLAppBlogElement extends Components.AppBlog, HTMLStencilElement {}
  var HTMLAppBlogElement: {
    prototype: HTMLAppBlogElement;
    new (): HTMLAppBlogElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLFirstPostElement extends Components.FirstPost, HTMLStencilElement {}
  var HTMLFirstPostElement: {
    prototype: HTMLFirstPostElement;
    new (): HTMLFirstPostElement;
  };

  interface HTMLGitSetupElement extends Components.GitSetup, HTMLStencilElement {}
  var HTMLGitSetupElement: {
    prototype: HTMLGitSetupElement;
    new (): HTMLGitSetupElement;
  };

  interface HTMLNavBarElement extends Components.NavBar, HTMLStencilElement {}
  var HTMLNavBarElement: {
    prototype: HTMLNavBarElement;
    new (): HTMLNavBarElement;
  };

  interface HTMLRevampPostElement extends Components.RevampPost, HTMLStencilElement {}
  var HTMLRevampPostElement: {
    prototype: HTMLRevampPostElement;
    new (): HTMLRevampPostElement;
  };
  interface HTMLElementTagNameMap {
    'app-blog': HTMLAppBlogElement;
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
    'first-post': HTMLFirstPostElement;
    'git-setup': HTMLGitSetupElement;
    'nav-bar': HTMLNavBarElement;
    'revamp-post': HTMLRevampPostElement;
  }
}

declare namespace LocalJSX {
  interface AppBlog {
    'posts'?: any;
  }
  interface AppHome {
    'posts'?: any;
  }
  interface AppRoot {
    'posts'?: any;
  }
  interface FirstPost {}
  interface GitSetup {}
  interface NavBar {}
  interface RevampPost {}

  interface IntrinsicElements {
    'app-blog': AppBlog;
    'app-home': AppHome;
    'app-root': AppRoot;
    'first-post': FirstPost;
    'git-setup': GitSetup;
    'nav-bar': NavBar;
    'revamp-post': RevampPost;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-blog': LocalJSX.AppBlog & JSXBase.HTMLAttributes<HTMLAppBlogElement>;
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'first-post': LocalJSX.FirstPost & JSXBase.HTMLAttributes<HTMLFirstPostElement>;
      'git-setup': LocalJSX.GitSetup & JSXBase.HTMLAttributes<HTMLGitSetupElement>;
      'nav-bar': LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
      'revamp-post': LocalJSX.RevampPost & JSXBase.HTMLAttributes<HTMLRevampPostElement>;
    }
  }
}


