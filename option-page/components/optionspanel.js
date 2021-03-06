const OptionsPanel = (() => {
  const OptionsPanelStandalone = React.createClass({
    propTypes: {
      onOptionChange: React.PropTypes.func
    },

    render: function() {
      return React.DOM.div({}, [
        React.createElement(PrivateWindowSection, {
          options: this.props.options.privateWindow,
          onOptionChange: this.props.onOptionChange,
        }),
        React.createElement(PinnedTabSection, {
          options: this.props.options.pinnedTab,
          onOptionChange: this.props.onOptionChange,
        }),
      ]);
    }
  });

  return ReactRedux.connect((state) => {
    return {
      options: state.get("options"),
    };
  }, ActionCreators)(OptionsPanelStandalone);
})();
