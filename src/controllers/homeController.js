export const getHomePage = (req, res) => {
  res.render('index', { 
    title: req.t('title'),
    message: req.t('message'),
  });
};