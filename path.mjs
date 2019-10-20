// FILE:	path.mjs
// AUTHOR:	Luca Leon Happel
// DATE:	20.10.2019
// LINK:	https://www.tutorialspoint.com/nodejs/nodejs_path_module.htm

// URL -> URL
const normalize = u => {
	let p = u.split('/');
	return new Array(leadingRelativePaths(u))
		.fill('..')
		.concat(p
			.filter((e,i) => p[i+1]!='..')
			.filter(e => e!='..' && e!='.' && e!='')
		)
		.join('/')
}

const leadingRelativePaths = u => u
	.split('/')
	.filter(e => e!='')
	.indexOf(u
		.split('/')
		.filter(e => e!='')
		.find(e => e!='..')
)

// [URL] -> URL
const join = (...u) => normalize(u.join('/'))

// URL -> Boolean
const isAbsolute = u => !u
	.split('/')
	.some(e => e == '..')

// URL -> Url
const dirname = u => u[u.length-1] != '/'
	? u
		.split('/')
		.slice(0,-1)
		.join('/')
		.concat('/')
	: u

const basename = u => u[u.length-1] != '/'
	? u
		.split('/')
		.pop()
	: ''

const extname = u => basename(u)
	.split('.')
	.pop()

export {
	normalize,
	join,
	isAbsolute,
	dirname,
	basename,
	extname
}
