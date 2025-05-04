export const getHomePage = (req, res) => {
  res.render('index', { 
    title: "Homepage",
    message: "Welcome to the Book shop!",
  });
};