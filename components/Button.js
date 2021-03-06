export default class extends React.Component {

  render() {
    let { backgroundColor = 'blue', emoji='', emojiDown='', disabled=false, loading=false } = this.props
    let classes = backgroundColor+'Background text-reg white';
    if(disabled){
      classes += ' disabled';
    }
    if(!emojiDown || emojiDown.length<1){
      emojiDown = emoji;
    }

    let spinnerClass=''
    if(loading){
      spinnerClass=' visible'
    }

    return (
      <div className={'button '+classes + ' z-shadow2'} onClick={this.props.onClick}>
        {emoji?<span className='container'><span className='emoji'>{emoji}</span><span className='emojiDown'>{emojiDown}</span></span>:''}{this.props.children}
        <div className={"spinner"+spinnerClass}></div>
        <style jsx>{`
          .spinner {
            position: absolute;
            right: 50px;
            top: 50%;
            margin-top: -5px;
            visibility: hidden;
          }
          .spinner.visible {
            visibility: visible;
          }
          .button {
            position: relative;
		        text-transform: uppercase;
            line-height: 50px;
            font-size: 24px;
            border-radius: 100px;
            padding-top: 8px;
            padding-bottom: 10px;
            margin: 12px 0px;
            text-align: center;
            cursor:pointer;
          }
          .button:active {
            position: relative;
            top: 1px;
            left: 1px;
            box-shadow: none !important;
          }
          .button:focus, .button:hover {
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.10),
              0 8px 17px rgba(0, 0, 0, 0.10);
          }
          .container {
            padding-right: 10px;
            font-size: 45px;
            position:relative;
            top: 5px;
          }
          .emojiDown {
            display:none;
          }
          .button:active .emoji {
            display:none;
          }
          .button:active .emojiDown {
            display:inline;
          }
          .disabled {
            opacity: .25;
            cursor: default;
          }
          .disabled.button:active {
            position: relative;
            top: 0px;
            left: 0px;
          }
        `}</style>
      </div>
    )
  }
}
