# TODO Plan for Making Tests Pass

## Files to Create/Update:

### 1. Create server/app.py ✅
- Flask app setup with CORS
- Database configuration
- `/movies` route that returns all movies as JSON

### 2. Update client/package.json ✅
- Add proxy setting for Flask backend
- Update start script to use PORT=4000

### 3. Update client/src/App.js ✅
- Import useEffect from React
- Add fetch request to `/movies` endpoint
- Display movie data or console log it

### 4. Run tests to verify pass
- Run pytest to ensure tests pass
- Run React tests if needed

## Execution Order:
1. ✅ Create server/app.py
2. ✅ Update client/package.json
3. ✅ Update client/src/App.js
4. 🔄 Run pytest to verify tests pass
5. ⬜ Update client/src/App.test.js if needed

## Notes:
- The current test is just a placeholder that should always pass (assert 1==1)
- Need to ensure Flask app can run and serve movie data
- Need to ensure React app can make requests to Flask backend
