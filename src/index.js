import React, {  } from 'react'
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';
import faker from 'faker';
import ApprovalCard from './components/ApprovalCard';
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4> Warning! </h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45" 
                    commentText="Lorem" 
                    imageURL={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 3:45" 
                    commentText="Ipsum" 
                    imageURL={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 2:45" 
                    commentText="Dolores" 
                    imageURL={faker.image.avatar()}/>
            </ApprovalCard>

        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
