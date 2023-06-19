import './helpRequestStyle.css';
import tick from '../../src-assets/helpreqimg/icon-done.png';
import reply from '../../src-assets/helpreqimg/icon-reply.png';
import Scrollbar from '../../common/Scrollbar/Scrollbar';
//npm install axios
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function HelpRequestMain() {
  //create arrays that use useState
  const [requests, setRequests] = useState([]);
  const [checkedIds, setCheckedIds] = useState([]);

  // Function to handle checkbox changes - run on change
  const handleCheckboxChange = (event) => {
    //makes checkboxID to the event target
    const checkboxId = event.target.id;

    console.log(checkboxId); //working

    // Update checkedIds state based on current checkbox state
    if (checkedIds.includes(checkboxId)) {
      // console.log(checkedIds);
      setCheckedIds(checkedIds.filter((id) => id !== checkboxId));
    } else {
      // console.log(checkedIds);
      //adds checkboxID to array
      setCheckedIds([...checkedIds, checkboxId]);
    }
  };

  //use useEffect to only run the get request once.
  //second parameter is when it will run again
  useEffect(() => {
    axios
      .get('http://localhost:4000/api/help-request')
      //response comes as an object with an array under 'data' key
      .then((res) => setRequests(res.data));
    //second param - runs when requests has changed - requests before/after is different
  }, [requests]);
  // console.log(data);

  // run when mark as done is clicked
  const markDone = (id) => {
    // console.log('marked as done!');
    //id is the first index of checkIds
    id = checkedIds[0];
    console.log('this is the id', id);

    //maps through the received id and applies a axios post query to it - sets it to done = 1 where request_id = id
    checkedIds.map((id) => {
      axios
        .post('http://localhost:4000/api/help-request', {
          query: `UPDATE help_request SET done = 1 WHERE done = 0 AND request_id = ${id[0]};`,
        })
        .then((res) => {
          console.log(res.data);
          //then removes the first index in checkIds array
          checkedIds.shift();
        })
        .catch((err) => console.log(err));
    });
  };

  //added reset button to make all requests done = 0
  const reset = () => {
    axios
      .post('http://localhost:4000/api/help-request', {
        query: `UPDATE help_request SET done = 0 WHERE done = 1;`,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // function to return with 'her' or 'his' in description depending on name. param in bracket can be anything
  const reqDesc = (request) => {
    // console.log(asdf.name, 'can be anything');
    if (request.name === 'Neveah Machenry' || request.name === 'Tokio Han') {
      return 'needs help with her project.';
    } else return 'needs help with his project.';
  };

  //formating the date - making it a word depending on day of week
  function formatDate(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ['SUN', 'MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    return `${dayOfWeek} ${date.getDate()} April ${date.getFullYear()}`;
  }

  return (
    <div className='helpReqMainBody'>
      {/* {requests && //if data = true then display...
        requests.map((request, index) => (
          //adding a key to most outer element
          <div key={request.request_id}>
            <p> */}
      {/* .split(' ')[0] splits the string into an array of words. then select the first element of this array using array indexing. */}
      {/* {index + 1}. {request.name.split(' ')[0]}
            </p>
            <img
              src={request.profile_pic}
              alt='student'
              className='reqImg'
            ></img>
          </div>
        ))} */}

      <main className='helpMainBg'>
        <div className='helpContainer'>
          <div className='helpContainerFlex'>
            <div className='helpContentContainer'>
              {/* top of page text */}
              <div className='flexContainerHelp'>
                <h1 className='helpTitle'>Help Requests</h1>
                <div className='choicesContainer flexContainerHelp'>
                  <img className='choiceIcon' src={reply} alt='reply'></img>
                  <p className='requestChoices' onClick={reset}>
                    reply
                  </p>
                  <div className='reqFlexContainer' onClick={markDone}>
                    <img
                      className='choiceIcon markAsDone'
                      src={tick}
                      alt='done'
                    ></img>
                    <p className='requestChoices markAsDone'>mark as done</p>
                  </div>
                </div>
              </div>
              {/* maps through help requests */}
              {requests && //if data = true then display...
                requests.map((request) => (
                  <div key={request.request_id}>
                    <div className='requestBox'>
                      <div className='reqFlexContainer'>
                        <input
                          type='checkbox'
                          className='checkBox'
                          onChange={handleCheckboxChange}
                          id={request.request_id}
                        />
                        <div className='requestCard flexContainerHelp'>
                          <div className='reqInfo'>
                            <img
                              src={request.profile_pic}
                              alt='profile img'
                              className='reqImg'
                            ></img>
                            <p className='reqName'>
                              <span className='studentReqName'>
                                {request.name.split(' ')[0]}
                              </span>{' '}
                              {/* {req.desc} */}
                              {reqDesc(request)}
                            </p>
                          </div>
                          <div className='reqDateTime'>
                            <p className='requestDate'>
                              {formatDate(request.date_created)}
                              {/* request.date_created.split('T')[0] */}
                            </p>
                            <p className='requestTime'>{request.time}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              {/* {requestArr.map((req) => (
                <div>
                  <div className='requestBox'>
                    <div className='reqFlexContainer'>
                      <input type='checkbox' className='checkBox' />
                      <div className='requestCard flexContainerHelp'>
                        <div className='reqInfo'>
                          <img
                            src={req.img}
                            alt='profile img'
                            className='reqImg'
                          ></img>
                          <p className='reqName'>
                            <span className='studentReqName'>{req.name}</span>{' '}
                            {req.desc}
                          </p>
                        </div>
                        <div className='reqDateTime'>
                          <p className='requestDate'>{req.date}</p>
                          <p className='requestTime'>{req.time}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              {/* Individual request box for student - Aiden */}
              {/* <div className='requestBox'>
                <div className='reqFlex Container'>
                  <input type='checkbox' className='checkBox' />
                  <div className='requestCard flexContainerHelp'>
                    <div className='reqInfo'>
                      <img
                        src='public-images/students/AidenAndrews.png'
                        alt='profile img'
                        className='reqImg'
                      ></img>
                      <p className='reqName'>
                        <span className='studentReqName'>Aiden</span> needs help
                        with his project.
                      </p>
                    </div>

                    <div className='reqDateTime'>
                      <p className='requestDate'>TUE 28 April 2023</p>
                      <p className='requestTime'>10:43 AM</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <Scrollbar></Scrollbar>
          </div>
        </div>
      </main>
    </div>
  );
}
