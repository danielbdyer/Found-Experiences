import React from 'react'
import Sidebar from '../../common/Sidebar'
import './index.css'

import {connect} from 'react-redux'

const Tips = ({
	tips = [{
		text : 'Try the veal!',
		userImg : null,
		userName : 'Danny Dyer'
	}]
}) => (
	<Sidebar heading={"TIPS"}
		otherClass={'tips'}
		style={{'boxShadow': '0 0 34px 0 rgba(115, 95, 255, 0.32)'}}>

		{tips.map((tip, i) => (
			<div key={i} className="sidebar-child">
				<div className="tip" key={i}>
					<div className="round-image">
						<img src={tip.userImg} alt={'img'}/>
					</div>
					<div className="tip-details">
						<div className="tip-author">
							{tip.userName}
						</div>
						<div className="tip-content" title={tip.text}>
							{tip.text}
						</div>
					</div>
				</div>
			</div>
		))}
	</Sidebar>
)

const mapStateToProps = ({placeDetails}) => ({tips: placeDetails.tips})

export default connect(mapStateToProps)(Tips)
