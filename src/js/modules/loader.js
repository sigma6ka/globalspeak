const body = document.body;

function loader() {
	const loader = document.querySelector('#loader');
	body.classList.add("_lock");

	window.addEventListener('load', () => {
        setTimeout(()=> {
            loader.classList.add('loader-wrapper--hidden');
						body.classList.remove("_lock");
        }, 1500)
	});
}

export default loader;