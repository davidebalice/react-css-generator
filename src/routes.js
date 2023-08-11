import Filter from "./pages/Filter/Filter";
import Flex from "./pages/Flex/Flex";
import Backgroundcolor from "./pages/BackgroundColor/Backgroundcolor";
import Backgroundgradient from "./pages/Backgroundgradient/Backgroundgradient";
import Border from "./pages/Border/Border";
import BorderRadius from "./pages/BorderRadius/BorderRadius";
import Blur from "./pages/Filter/Blur";
import Sepia from "./pages/Filter/Sepia";
import Brightness from "./pages/Filter/Brightness";
import Contrast from "./pages/Filter/Contrast";
import Grayscale from "./pages/Filter/Grayscale";
import HeuRotate from "./pages/Filter/HeuRotate";
import Invert from "./pages/Filter/Invert";
import Saturate from "./pages/Filter/Saturate";
import Home from "./pages/Home/Home";
import DropShadow from "./pages/Filter/DropShadow";
import BoxShadow from "./pages/BoxShadow/BoxShadow";
import { Navigate } from "react-router-dom";
import Opacity from "./pages/Opacity/Opacity";
import FontSize from "./pages/Text/FontSize";
import Textcolor from "./pages/Text/Textcolor";
import TextDecoration from "./pages/Text/TextDecoration";
import Texttransform from "./pages/Text/Texttransform";
import LetterSpacing from "./pages/Text/LetterSpacing";
import Lineheight from "./pages/Text/Lineheight";
import Textalign from "./pages/Text/Textalign";
import FontWeight from "./pages/Text/FontWeight";
import Rotate from "./pages/Transform/Rotate";
import Skew from "./pages/Transform/Skew";
import FlexBox from "./pages/FlexBox/FlexBox";

let router = [
  { path: "/", element: <Home /> },
  { path: "/filter", element: <Filter /> },
  { path: "/flex", element: <Flex /> },
  { path: "/backgroundcolor", element: <Backgroundcolor /> },
  { path: "/backgroundgradient", element: <Backgroundgradient /> },
  { path: "/border", element: <Border /> },
  { path: "/BorderRadius", element: <BorderRadius /> },
  { path: "/boxshadow", element: <BoxShadow /> },
  { path: "/opacity", element: <Opacity /> },
  { path: "/filter/blur", element: <Blur /> },
  { path: "/filter/sepia", element: <Sepia /> },
  { path: "/filter/brightness", element: <Brightness /> },
  { path: "/filter/contrast", element: <Contrast /> },
  { path: "/filter/grayscale", element: <Grayscale /> },
  { path: "/filter/heurotate", element: <HeuRotate /> },
  { path: "/filter/invert", element: <Invert /> },
  { path: "/filter/saturate", element: <Saturate /> },
  { path: "/filter/dropshadow", element: <DropShadow /> },
  { path: "/fontsize", element: <FontSize /> },
  { path: "/color", element: <Textcolor /> },
  { path: "/text/decoration", element: <TextDecoration /> },
  { path: "/text/transform", element: <Texttransform /> },
  { path: "/text/letterSpacing", element: <LetterSpacing /> },
  { path: "/text/lineheight", element: <Lineheight /> },
  { path: "/text/textalign", element: <Textalign /> },
  { path: "/text/fontweight", element: <FontWeight /> },
  { path: "/transform/rotate", element: <Rotate /> },
  { path: "/transform/skew", element: <Skew /> },
  { path: "/flexbox", element: <FlexBox /> },
  { path: "*", element: <Navigate to={"/"} /> },
];

export default router;
