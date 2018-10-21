var image = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    info: 'Gatunek: familijny, fantasy, przygodowy',
    src: 'https://www.filmonpaper.com/site/media/2011/07/HarryPotterAndTheSorcerersStone_onesheet_USA_DrewStruzan-1-500x730.jpg',
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    info: 'Gatunek: animacja, familijny',
    src: 'https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.3.jpg'
  },
  {
  id: 3,
  title: 'Zielona mila',
  desc: 'Historia niezwykłgo człowieka skazabego na śmierć',
  info: 'Gatunek: dramat',
  a: 'https://ssl-gfx.filmweb.pl/po/08/62/862/7517878.2.jpg'
  },
  {
  id: 4,
  title: 'Lista Schindlera',
  desc: 'Historia przedsiebiorcy, który podczas II wojny swiatowej ratował Żydów',
  info: 'Gatunek: dramat',
  a: 'https://ssl-gfx.filmweb.pl/po/08/62/862/7517878.2.jpg'
  },
  {
  id: 5,
  title: 'Bogowie',
  desc: 'Film opowiada o początkach polskiej transplantologii serca',
  info: 'Gatunek: biograficzny, dramat',
  a: 'https://ssl-gfx.filmweb.pl/po/43/78/694378/7632114.2.jpg',
  }
];

var Movie = React.createClass({
  propTypes: {
      image: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        React.createElement(Movie, {key: image_id},
            React.createElement('h1', {}, 'Lista filmów'),
            React.createElement('h3', {}, this.props.image.title),
            React.createElement('p', {}, this.props.image.desc),
            React.createElement('p', {}, this.props.image.info),
            React.createElement('img', {src: this.props.image.src})
        )
      )
    }
});

var element = React.createElement(Movie, {image: image});

ReactDOM.render(element, document.getElementById('app'));

