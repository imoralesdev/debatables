import Stories from "@/components/Stories";
import Post from "@/components/Post";

const posts = [
  {
    "_id": 1,
    "userImage": 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/insider.png',
    "userName": 'Business Insider',
    "postTime": '10 mins',
    "postText": 'Tempor nec feugiat nisl pretium fusce id velit ut tortor. Tristique senectus et netus et malesuada fames. Nam libero justo laoreet sit amet cursus sit.',
    "postImage": 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/safe_image.jpg',
    "postLike": '100',
    "postDislike": '20',
    "postDebate": '6'
  },
  {
    "_id": 2,
    "userImage": 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/forbes.jpg',
    "userName": 'Forbes',
    "postTime": '45 mins',
    "postText": 'A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Cursus vitae congue mauris rhoncus aenean vel elit. Aliquam eleifend mi in nulla posuere.',
    "postImage": 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/bidey.jpg',
    "postLike": '75',
    "postDislike": '5',
    "postDebate": '20'
  },
  {
    "_id": 3,
    "userImage": 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/insider.png',
    "userName": 'Business Insider',
    "postTime": '1 hr',
    "postText": 'Tempor nec feugiat nisl pretium fusce id velit ut tortor. Tristique senectus et netus et malesuada fames. Nam libero justo laoreet sit amet cursus sit.',
    "postImage": 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/johnwayne.png',
    "postLike": '100',
    "postDislike": '20',
    "postDebate": '6'
  },
  {
    "_id": 4,
    "userImage": 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/forbes.jpg',
    "userName": 'Forbes',
    "postTime": '3 hr',
    "postText": 'A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Cursus vitae congue mauris rhoncus aenean vel elit. Aliquam eleifend mi in nulla posuere.',
    "postImage": 'https://raw.githubusercontent.com/imoralescs/imoralescs.github.io/master/images/debatable/dem.png',
    "postLike": '75',
    "postDislike": '5',
    "postDebate": '20'
  }
]

export default function Home() {
  return (
    <>
      <div>
        <Stories />
      </div>
      <ul className='posts'>
        {posts.map((post) => (
          <li className='posts__item' key={post._id}>
            <Post {...post} />
          </li>
        ))}
      </ul>
    </>
  );
}
