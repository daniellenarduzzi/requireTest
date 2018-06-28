const otherContract = artifacts.require('otherContract')
const test = artifacts.require('test')
contract('otherContract', addresses => {
  console.log('comienza test')
  const owner = addresses[0]
  let instanceotherContract
  let instancetest
  before(async () => {
     instanceotherContract = await otherContract.new( {from: owner})
     instancetest = await test.new(instanceotherContract.address ,{from: owner})
  })

  describe('testing interaction contract', () => {

    it('cant use chanA', async () => {
      try {
        let a_before = await instanceotherContract.a()
        let x = await instancetest.chanA(2)
        let a_after = await instanceotherContract.a()
        assert.equal(a_before,a_after)
        assert.fail()
      }
      catch(error) {
        assert(error.toString().includes('revert'), error.toString())
      }
    })
})
})
