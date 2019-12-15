import * as React from 'react';
import { css } from 'glamor';

export type IViewProps = {};

export class View extends React.PureComponent<IViewProps> {
  public render() {
    const styles = {
      base: css({
        fontSize: 60,
        fontFamily: 'sans-serif',
        padding: 30,
        paddingTop: 15,
      }),
    };

    return (
      <div {...styles.base}>
        <div>View</div>
      </div>
    );
  }
}
