/*
I might have modified some parts of the code.
Copyright (c) 2017 Eric Masseran

From: https://github.com/denschub/firefox-tabgroups
Copyright (c) 2015 Dennis Schubert

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
const GroupList = (() => {
  const GroupListStandalone = React.createClass({
    propTypes: {
      groups: React.PropTypes.object.isRequired,
      closeTimeout: React.PropTypes.number,
      onGroupAddClick: React.PropTypes.func,
      onGroupAddDrop: React.PropTypes.func,
      onGroupClick: React.PropTypes.func,
      onGroupDrop: React.PropTypes.func,
      onGroupCloseClick: React.PropTypes.func,
      onGroupTitleChange: React.PropTypes.func,
      onTabClick: React.PropTypes.func,
      onTabDrag: React.PropTypes.func,
      onTabDragStart: React.PropTypes.func,
      uiHeightChanged: React.PropTypes.func
    },

    componentDidUpdate: function() {
      this.props.uiHeightChanged && this.props.uiHeightChanged();
    },

    render: function() {
      return React.DOM.ul(
        {className: "group-list"},
        this.props.groups.map((group) => {
          return React.createElement(Group, {
            key: group.id,
            group: group,
            closeTimeout: this.props.closeTimeout,
            onGroupClick: this.props.onGroupClick,
            onGroupDrop: this.props.onGroupDrop,
            onGroupCloseClick: this.props.onGroupCloseClick,
            onGroupTitleChange: this.props.onGroupTitleChange,
            onTabClick: this.props.onTabClick,
            onTabDrag: this.props.onTabDrag,
            onTabDragStart: this.props.onTabDragStart,
            uiHeightChanged: this.props.uiHeightChanged
          });
        }),
        React.createElement(
          GroupAddButton,
          {
            onClick: this.props.onGroupAddClick,
            onDrop: this.props.onGroupAddDrop
          }
        )
      );
    }
  });

  return ReactRedux.connect((state) => {
    return {
      groups: state.get("tabgroups"),
      closeTimeout: state.get("closeTimeout")
    };
  }, ActionCreators)(GroupListStandalone);
})();
