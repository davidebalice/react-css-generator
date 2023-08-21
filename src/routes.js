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
  { path: "/backgroundcolor", element: <Backgroundcolor /> },
  { path: "/backgroundgradient", element: <Backgroundgradient /> },
  { path: "/border", element: <Border /> },
  { path: "/borderradius", element: <BorderRadius /> },
  { path: "/boxshadow", element: <BoxShadow /> },
  { path: "/opacity", element: <Opacity /> },
  { path: "/rotate", element: <Rotate /> },
  { path: "/skew", element: <Skew /> },
  { path: "/fontsize", element: <FontSize /> },
  { path: "/fontfamily", element: <FontFamily /> },
  { path: "/textcolor", element: <TextColor /> },
  { path: "/textdecoration", element: <TextDecoration /> },
  { path: "/texttransform", element: <TextTransform /> },
  { path: "/letterspacing", element: <LetterSpacing /> },
  { path: "/lineheight", element: <LineHeight /> },
  { path: "/textalign", element: <TextAlign /> },
  { path: "/fontweight", element: <FontWeight /> },
  { path: "/blur", element: <Blur /> },
  { path: "/sepia", element: <Sepia /> },
  { path: "/brightness", element: <Brightness /> },
  { path: "/contrast", element: <Contrast /> },
  { path: "/grayscale", element: <Grayscale /> },
  { path: "/heurotate", element: <HeuRotate /> },
  { path: "/invert", element: <Invert /> },
  { path: "/saturate", element: <Saturate /> },
  { path: "/dropshadow", element: <DropShadow /> },
  { path: "/flex", element: <Flex /> },
  { path: "/flexbox", element: <FlexBox /> },
  { path: "*", element: <Navigate to={"/"} /> },
];

export default router;
