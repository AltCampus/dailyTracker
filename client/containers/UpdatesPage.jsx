import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchDailyUpdates } from '../actions';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

class UpdatesPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchDailyUpdates());
  }

  render() {
    const currentUser = this.props.currentUser;
    const dailyUpdates = this.props.dailyUpdates;
    const values = formatByDate(dailyUpdates.list);

    const today = new Date();

    return (
      <div className="container">
        <div>
          <div className="container">
            <Header currentUser={currentUser} />
          </div>
          <div className="container column is-two-thirds">
            {
              !dailyUpdates.isFetching ?
                <div>
                  <CalendarHeatmap
                    startDate={shiftDate(today, -180)}
                    endDate={today}
                    values={values}
                    showWeekdayLabels={true}
                    tooltipDataAttrs={value => {
                      return {
                        'data-tip': `${(value.date ? value.date.toDateString() : 'No updates')}`,
                      };
                    }}
                />
                  <ReactTooltip />
                </div>
                : null
            }
          </div>
          <div className="container column is-half">
            <h4 className="title is-center">Past Updates</h4>
            {
              !dailyUpdates.isFetching ?
                (dailyUpdates.list.length == 0 ?
                  <p>No updates yet.</p>
                :
                  dailyUpdates.list.map((d, i) => {
                    return (
                      <div key={i} className="list center daily-list">
                        <p><strong>Tweet URL - </strong>{d.tweetURL}</p>
                        <p><strong>Reflection - </strong>{d.reflection}</p>
                        <p><strong>Date - </strong>{(new Date(d.createdAt)).toDateString()}</p>
                      </div>
                    )
                  })
                )
              : null
            }
          </div>
        </div>
      </div>
    )
  }
}


function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function formatByDate(list) {
  return list.map((l, i) => {
    return { date: new Date(l.createdAt) }
  });
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(UpdatesPage);