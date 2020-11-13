module.exports = (req, res, next) => {
  const isAuthenticated = 
    req.headers.authorization || 
    req.headers['x-redmine-api-key'] || 
    req.query.key

  if (!isAuthenticated) {
    res.set('WWW-Authenticate', 'Basic realm="Redmine API"')
    res.status(401).send()
  } else {
    next()
  }
}