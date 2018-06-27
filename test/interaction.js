const otherContract = artifacts.require('otherContract')
const test = artifacts.require('test')
contract('otherContract', addresses => {
  console.log('comienza test')
  const owner = addresses[0]
  before(async () => {
     instanceotherContract = await otherContract.new( {from: owner})
     instancetest = await test
        .new(instanceotherContract.address ,{from: owner})
  })

  describe('testing interaction contract', () => {

    it('cant use chanA', async () => {
      try {
        let x = await instancetest.chanA(2)
        console.log(x);
        assert.fail()
      }
      catch(error) {
        assert(error.toString().includes('revert'), error.toString())
      }
    })
})
})
