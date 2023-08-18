import { Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Backgroundcolor from "./pages/Box/Backgroundcolor";
import Backgroundgradient from "./pages/Box/Backgroundgradient";
import Opacity from "./pages/Box/Opacity";
import BoxShadow from "./pages/Box/BoxShadow";
import Border from "./pages/Box/Border";
import BorderRadius from "./pages/Box/BorderRadius";
import Rotate from "./pages/Box/Rotate";
import Skew from "./pages/Box/Skew";
import FontSize from "./pages/Text/FontSize";
import FontFamily from "./pages/Text/FontFamily";
import TextColor from "./pages/Text/TextColor";
import TextDecoration from "./pages/Text/TextDecoration";
import FontWeight from "./pages/Text/FontWeight";
import TextTransform from "./pages/Text/TextTransform";
import LetterSpacing from "./pages/Text/LetterSpacing";
import LineHeight from "./pages/Text/LineHeight";
import TextAlign from "./pages/Text/TextAlign";
import Filter from "./pages/Filter/Filter";
import DropShadow from "./pages/Filter/DropShadow";
import Blur from "./pages/Filter/Blur";
import Sepia from "./pages/Filter/Sepia";
import Brightness from "./pages/Filter/Brightness";
import Contrast from "./pages/Filter/Contrast";
import Grayscale from "./pages/Filter/Grayscale";
import HeuRotate from "./pages/Filter/HeuRotate";
import Invert from "./pages/Filter/Invert";
import Saturate from "./pages/Filter/Saturate";
import FlexBox from "./pages/FlexBox/FlexBox";
import Flex from "./pages/Flex/Flex";

let router = [
  { path: "/", element: <Home /> },
  { path: "/filter", element: <Filter /> },
  { path: "/flex", element: <Flex /> },
  { path: "/backgroundcolor", element: <Backgroundcolor /> },
  { path: "/backgroundgradient", element: <Backgroundgradient /> },
  { path: "/border", element: <Border /> },
  { path: "/borderradius", element: <BorderRadius /> },
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
  { path: "/fontfamily", element: <FontFamily /> },
  { path: "/textcolor", element: <TextColor /> },
  { path: "/textdecoration", element: <TextDecoration /> },
  { path: "/texttransform", element: <TextTransform /> },
  { path: "/letterSpacing", element: <LetterSpacing /> },
  { path: "/lineheight", element: <LineHeight /> },
  { path: "/textalign", element: <TextAlign /> },
  { path: "/fontweight", element: <FontWeight /> },
  { path: "/transform/rotate", element: <Rotate /> },
  { path: "/transform/skew", element: <Skew /> },
  { path: "/flexbox", element: <FlexBox /> },
  { path: "*", element: <Navigate to={"/"} /> },
];

export default router;
