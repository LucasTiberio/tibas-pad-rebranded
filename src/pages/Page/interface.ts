import React from "react"
import { iHeader } from "../../components/Header/interface";

export interface iPage {
  children: React.ReactChild | React.ReactChild[]
  loading: boolean;
  header?: iHeader;
}