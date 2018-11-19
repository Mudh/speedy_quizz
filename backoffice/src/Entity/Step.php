<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StepRepository")
 */
class Step
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Question", mappedBy="step")
     * @JMS\Exclude();
     */
    private $questions;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Coeff", mappedBy="step")
     * @JMS\Exclude();
     */
    private $coeffs;


    public function __construct()
    {
        $this->questions = new ArrayCollection();
        $this->coeffs = new ArrayCollection();
    
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Question[]
     */
    public function getQuestions(): Collection
    {
        return $this->questions;
    }

    public function addQuestion(Question $question): self
    {
        if (!$this->questions->contains($question)) {
            $this->questions[] = $question;
            $question->setStep($this);
        }

        return $this;
    }

    public function removeQuestion(Question $question): self
    {
        if ($this->questions->contains($question)) {
            $this->questions->removeElement($question);
            // set the owning side to null (unless already changed)
            if ($question->getStep() === $this) {
                $question->setStep(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Coeff[]
     */
    public function getCoeffs(): Collection
    {
        return $this->coeffs;
    }

    public function addCoeff(Coeff $coeff): self
    {
        if (!$this->coeffs->contains($coeff)) {
            $this->coeffs[] = $coeff;
            $coeff->setStep($this);
        }

        return $this;
    }

    public function removeCoeff(Coeff $coeff): self
    {
        if ($this->coeffs->contains($coeff)) {
            $this->coeffs->removeElement($coeff);
            // set the owning side to null (unless already changed)
            if ($coeff->getStep() === $this) {
                $coeff->setStep(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->name;
    }

}
