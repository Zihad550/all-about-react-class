import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: newChange, locale: newLocale } = nextProps;
    if (currentChange === newChange && newLocale === currentLocale) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    const { change, locale } = this.props;
    return (
      <button type="button" onClick={() => change(locale)}>
        Click
      </button>
    );
  }
}

export default Button;
