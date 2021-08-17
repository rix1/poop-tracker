import * as React from "react";

import { Text, TextProps } from "./Themed";

export function MonoText({ style, ...rest }: TextProps): JSX.Element {
  return <Text {...rest} style={[style, { fontFamily: "space-mono" }]} />;
}
