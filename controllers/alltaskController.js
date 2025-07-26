const userId = req.session.userId; // this comes from login

if (!userId) {
  return res.redirect('/login');
}

const user = await User.findById(userId);
